<template>
  <div class="signup">
    <!-- <vue-form :fields="fields" :action="endpoint()" @success="successCallback"> -->
      <!-- <template slot="form-fields" slot-scope="form"> -->
        <div>
          <!-- <b-notification type="is-danger"
                          v-bind:class="form.errors.get('non_field_errors') ? 'is-danger': null"
                          v-if="form.errors.get('non_field_errors')">
            {{ form.errors.get('non_field_errors') }}
          </b-notification> -->
          <!-- <input
            :type="form.errors.get('full_name') ? 'is-danger': null"
            :message="form.errors.get('full_name')"
          > -->
          <p>signup form</p>
            <!-- <b-input
              v-model="fields.full_name"
              placeholder="Full Name"
            >
            </b-input>
          </b-field>
          <b-field
            :type="form.errors.get('email') ? 'is-danger': null"
            :message="form.errors.get('email')"
          >
            <b-input type="email"
                     v-model="fields.email"
                     placeholder="Email"
            >
            </b-input>
          </b-field>
          <b-field
            :type="form.errors.get('password') ? 'is-danger': null"
            :message="form.errors.get('password')"
          >
            <b-input type="password"
                     placeholder="Password"
                     v-model="fields.password"
                     password-reveal>
            </b-input>
          </b-field>
          <div class="form-button has-text-centered" slot="submit control">
            <b-field>
              <button class="custom-button button is-uppercase is-primary">Sign Up</button>
            </b-field>
          </div> -->
        </div>
      <!-- </template> -->
    <!-- </vue-form> -->
  </div>
</template>

<script>
import Form from '../../../mixins/Form.js'
import Helper from '../../../mixins/Helper.js'
export default {
  name: 'Signup',
  data () {
    return {
      currentActiveTab: 1
    }
  },
//   mixins: [Form, Helper],
  endpoint: 'users/create/',
  methods: {
    // snackbar () {
    //   this.$snackbar.open('Signed up successfully. Please sign in with  your credentials.')
    // },
    // successCallback (data) {
    //   this.$emit('notify', 'Signed up successfully. Please sign in with  your credentials.')
    // }
  },
  mounted () {
    if (this.$store.state.user) {
      this.$router.push({path: '/'})
    }
  }
}
</script>

