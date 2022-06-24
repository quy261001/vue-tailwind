<template>
  <div class="mt-8">
    <div class="container max-w-2xl mx-auto px-8">
      <!-- Form -->
      <form @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id= "fullName"
              class="px-4 py-3 rounded-lg border-2  border-gray-300 mt-1"
              type="text"
              placeholder="Full Name..."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col mt-6" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id= "email"
              class="px-4 py-3 rounded-lg border-2  border-gray-300 mt-1"
              type="email"
              placeholder="Email..."
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
         <div class="row">
          <label class="flex flex-col mt-6" for="password">
            <span class="font-semibold">Password</span>
            <input
              id= "password"
              class="px-4 py-3 rounded-lg border-2  border-gray-300 mt-1"
              type="password"
              placeholder="Password..."
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button type="submit" class="py-3 text-center w-full mt-4 bg-primary text-white font-bold rounded-lg">
            Sigh up
          </button>
        </div>
      </form>

      <!-- Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">Bạn đã có tài khoản ? </span>
        <span class="ml-1">
          <router-link 
          :to="{name: 'Login', params: {} }" class="text-primary font-bold">
          Sign In
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    const fullName = ref('');
    const email = ref('');
    const password = ref('');
    function onSubmit() {
      console.log({fullName, email, password})
    }
    return {fullName, email, password, onSubmit}
  },
};
</script>
