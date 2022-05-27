<template>
  <div class="submit-form">
      <div v-if="!submitted">
          <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" required v-model="tutorial.title" name="title">
          </div>

          <div class="form-group">
              <label for="description">Description</label>
              <input class="form-control" id="description" required v-model="tutorial.description" name="description">
          </div>
          <button @click="saveTutorial" class="btn btn-success">
              Submit
          </button>
      </div>
      <div v-else>
          <h4>You submitted successfully!</h4>
          <button class="btn btn-success" @click="newTutorial">
            ADD
          </button>
      </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService"

export default {
    name: "add-tutorial",
    data() {
        return {
            // tutorial 객체 초기화
            tutorial: {
                id: null,
                title: "",
                description: "",
                published: "N"
            },
            submitted: false
            };
        },
        methods: {
            saveTutorial() {
                // 전송용 데이터 -> springboot로 전송
                var data = {
                        title: this.tutorial.title,
                        description: this.tutorial.description
                    }
                    // springboot(api서버) 데이터 추가 요청
                    // 오전에 인텔리제이에서 http.client json
                    // 데이터 추가 -> db 저장 확인
                    // 백엔드(스프링) 데이터 추가 요청(json형태)
                    TutorialDataService.create(data)
                    .then(response => {
                        // 성공하면 이쪽으로 결과 들어옴
                        this.tutorial.id = response.data.id;
                        this.submitted = true;
                        console.log(response.data);
                    })
                    .catch(e => {
                        // 실패하면 이쪽으로 결과 들어옴
                        console.log(e);
                    })
            },
            newTutorial() {
                this.submitted = false;
                this.tutirial = {};
            }
        }
    }
        
</script>

<style>
    .submit-form {
        max-width: 300px;
        margin: auto;
    }
</style>