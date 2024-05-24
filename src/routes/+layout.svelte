<script>
  import "../app.css";
  import logo from '../lib/logo.png';

</script>


<div class="min-h-screen static">
  <div class="navbar bg-base-100">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <img class="max-w-[200px]" src={logo} alt="Your Description" />
    </div>
    <div class="navbar-end"></div>
  </div>
  <main>
    <slot></slot>
  </main>
</div>
