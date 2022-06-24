<template>
  <div class="mt-8">
    <div class="container max-w-2xl mx-auto px-8">
      <!-- Form -->
      <form @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col mt-6" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id= "email"
              class="px-4 py-3 rounded-lg border-2  border-gray-300 mt-1"
              type="email"
              placeholder="Email..."
              autocomplete="username"
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
            />
          </label>
        </div>
        <div class="row">
          <button type="submit" class="py-3 text-center w-full mt-4 bg-primary text-white font-bold rounded-lg">
            Sigh In
          </button>
        </div>
      </form>

      <!-- Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">Bạn chưa có tài khoản ? </span>
        <span class="ml-1">
          <router-link 
          :to="{name: 'Register', params: {} }" class="text-primary font-bold">
          Sign Up
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>