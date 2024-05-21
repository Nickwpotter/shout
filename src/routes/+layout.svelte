<script>
    import "../app.css";
  </script>
  
  <div class="min-h-screen flex flex-col bg-base-100 text-neutral">
    <header class="bg-primary text-base-100 p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-black">Shout</h1>
      </div>
    </header>
    <main class="flex-grow container mx-auto p-4">
      <slot></slot>
    </main>
    <footer class="bg-primary text-base-100 p-4 mt-4 shadow-md">
      <div class="container mx-auto text-center text-black">
        <p>&copy; 2024 Shout. All rights reserved.</p>
      </div>
    </footer>
  </div>
  