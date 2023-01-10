<template>
  <h1>Contact Page</h1>

  <form action="https://formspree.io/f/mknanyrd" method="POST">
    <label for="name" class="form-label">name</label>
    <input
      type="name"
      class="form-control"
      id="name"
      name="name"
      placeholder=""
      required
    />
    <label for="email" class="form-label">Email Address</label>
    <input
      type="email"
      class="form-control"
      id="email"
      name="email"
      placeholder=""
      required
    />

    <label for="message" class="form-label">Message</label>
    <textarea
      class="form-control"
      id="textarea"
      rows="3"
      name="text"
      required
    ></textarea>

    <input type="submit" class="btn submitbtn" value="Submit" />
  </form>
</template>

<script>
export default {};
</script>

<style scoped></style>
