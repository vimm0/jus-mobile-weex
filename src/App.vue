<template>
    <div class="wrapper">
              <!--<template v-if="checkUserLogin()">-->
<p>kasjf</p>
      <!--<header style="background:#fff;">-->
        <!--<layout></layout>-->
      <!--</header>-->
              <!--</template>-->
       <!--<router-view/>-->
    </div>
</template>

<script>
// import Nav from './components/UIComponent/Nav.vue'
//import Layout from "./components/app/Layout.vue";
import axios from "axios";
import config from "../configs/config";
import Vue from "vue";
import Helper from "./mixins/Helper";
import { mapState, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      view: ""
    };
  },
  components: {
    // 'nav': Nav,
//    layout: Layout
  },
  mixins: [Helper],
  created() {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.baseURL = config.build.apiBaseURL;
    if (this.token) {
      axios.defaults.headers["Authorization"] = `JWT ${this.token}`;
      //      console.log('refresh api app vue')
      //      console.log('refresh before: ', this.refreshBefore)
      let a = setTimeout(getUserTimeOut => {
        //        console.log('refresh api')
        global.axios
          .post("jwt/refresh/", { token: this.token })
          .then(({ data }) => {
            console.log(data);
            this.$store.dispatch("login", {
              userData: data
            });
          });
      }, this.refreshBefore * 1000);
    }
    axios.interceptors.request.use(
      config => {
        this.$store.commit("loading", true);
        return config;
      },
      error => {
        this.$store.commit("loading", false);
        alert(error);
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      response => {
        this.$store.commit("loading", false);
        return response;
      },
      error => {
        this.$store.commit("loading", false);
        if (error.response.status === 400) {
          this.$snackbar.open(error.response.statusText);
        }
        if (error.response.status === 401) {
          if (this.token) {
            this.$store.dispatch("logout");
            this.$snackbar.open("Token has expired. Please login again");
            this.$router.go();
          }
        }
        return Promise.reject(error);
      }
    );
    global.axios = axios;
    global.Vue = Vue;
  },
  computed: {
    ...mapState(["loading", "blocking"]),
    ...mapGetters(["token", "user", "refreshBefore", "loading"])
  }
};
</script>