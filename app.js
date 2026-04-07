const nav = `
<header class="nav">
  <div class="nav-inner">
    <a class="brand" href="index.html">Auto Curation <span>AI</span></a>
    <nav class="nav-links">
      <a href="dashboard.html">Dashboard</a>
      <a href="upload.html">Upload</a>
      <a href="analysis.html">Analysis</a>
      <a href="editor.html">Editor</a>
      <a href="pricing.html">Pricing</a>
      <a href="login.html" class="btn">Login</a>
      <a href="signup.html" class="btn btn-primary">Start Free</a>
    </nav>
  </div>
</header>`;
document.querySelector("#nav-root")?.insertAdjacentHTML("beforeend", nav);
