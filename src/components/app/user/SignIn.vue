<template>
  <div class="signin">
      <vue-form :fields="fields" :action="endpoint()" @success="successCallback">
      <template slot="form-fields" slot-scope="form">
        <text :type="form.errors.get('email') ? 'is-danger': null"
        :message="form.errors.get('email')"></text>
          <input type="email" placeholder="Email" :autofocus=true v-model="fields.email" class="input"/>
        <text :type="form.errors.get('password') ? 'is-danger': null"
        :message="form.errors.get('password')"></text>
          <input type="password" placeholder="Password" class="input" v-model="fields.password"/>
        <div class="form-button has-text-centered" slot="submit control">
          <button >Sign In</button>
        </div>
      </template>
      </vue-form>
  </div>
</template>

<script>
import Form from '../../../mixins/Form.js'
import { WxcButton } from "weex-ui";

export default {
  name: 'Signin',
  data () {
    return {username: ''}
  },
    components: { WxcButton },

  mixins: [Form],
  endpoint: 'jwt/create/',
  methods: {
  wxcButtonClicked(e) {
    console.log(e);
  },
  signIn (e) {console.log(e)},
  successCallback (data) {

  }
  }
}
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
