<template>
  <div>
    <header-logo></header-logo>
    <nuxt/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import HeaderLogo from '@/components/HeaderLogo'
  import MyFooter from '@/components/MyFooter'
  export default {
    components: {
      MyFooter,
      HeaderLogo
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<style src="buefy/lib/buefy.css"></style>

<style>
  @import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);

  body, input {
    font-family: Noto Sans JP, sans-serif;
  }
</style>
