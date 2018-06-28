<template>
  <div class="signin">
        <div>
          <p>Signin form</p>
 
        </div>
  </div>
</template>

<script>
import Form from '../../../mixins/Form.js'

export default {
  name: 'Signin',
  data () {
    return {username: ''}
  },
  mixins: [Form],
  endpoint: 'jwt/create/',
  methods: {

    successCallback (data) {
    
    }
  }
}
</script>
<style>
  
</style>
