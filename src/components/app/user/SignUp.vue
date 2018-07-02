<template>
  <div class="signup">
    <vue-form :fields="fields" :action="endpoint()" @success="successCallback">
      <template slot="form-fields" slot-scope="form">
     
          <input placeholder="Full Name" :type="form.errors.get('full_name') ? 'is-danger': null"
            :message="form.errors.get('full_name')" v-model="fields.full_name" :autofocus=true value="" />
          <input :type="form.errors.get('email') ? 'is-danger': null"
            :message="form.errors.get('email')" name="email" placeholder="Email" v-model="fields.email" required>
          <input :type="form.errors.get('password') ? 'is-danger': null"
            :message="form.errors.get('password')" name="password" placeholder="Password" v-model="fields.password" required>
          <!-- <text class="button" onclick='Submit'>Sign Up</text> -->
           <div class="" slot="submit control">
          <wxc-button text="Sign Up"
              @wxcButtonClicked="wxcButtonClicked">
              </wxc-button>
              </div>
          <div class="login-message">
            <p>Already registered?<router-link><text>Sign In.</text></router-link></p>
          </div>

      </template>
    </vue-form>
  </div>
</template>

<script>
import Form from "../../../mixins/Form.js";
import Helper from "../../../mixins/Helper.js";
import { WxcButton } from "weex-ui";

export default {
  name: "Signup",
  data() {
    return {
      currentActiveTab: 1
    };
  },
  components: { WxcButton },
  mixins: [Form, Helper],
  endpoint: "users/create/",
  methods: {
    // snackbar () {
    //   this.$snackbar.open('Signed up successfully. Please sign in with  your credentials.')
    // },
    // successCallback (data) {
    //   this.$emit('notify', 'Signed up successfully. Please sign in with  your credentials.')
    // }
    wxcButtonClicked(e) {
      console.log(e);
    }
  },
  mounted() {
    if (this.$store.state.user) {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
#wipt_0,
#wipt_1,
#wipt_2 {
  border: solid 1px black;
  margin: 0.61rem;
  height: 1rem;
}
input::placeholder {
  padding-left: 0.5rem;
}
p.button {
  /* text-align:center; */
  background-color: dimgrey;
  margin: 0.61rem;
  text-align: center;
}
.login-message {
  text-align: center;
}
</style>