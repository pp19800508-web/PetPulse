<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="theme-color" content="#4f46e5">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="PetPulse">
  <meta name="description" content="PetPulse: AI-powered all-in-one pet health tracking and creative companion.">
  
  <!-- SEO & Social Media -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="PetPulse AI">
  <meta property="og:title" content="PetPulse - Your Pet's AI Health Guardian">
  <meta property="og:description" content="Track health, calculate nutrition, and generate AI pet movies with Gemini 2.5 & Veo 3.1.">
  <meta property="og:image" content="https://cdn-icons-png.flaticon.com/512/616/616408.png">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="apple-touch-icon" href="https://cdn-icons-png.flaticon.com/512/616/616408.png">
  <link rel="manifest" href="./manifest.json">
  <title>PetPulse | All-in-One Pet Care</title>
  
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { 
      font-family: 'Inter', sans-serif; 
      -webkit-tap-highlight-color: transparent; 
      overscroll-behavior-y: contain;
      overflow-x: hidden;
      background-color: #f8fafc;
    }
    .glass-effect {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    main {
      padding-top: env(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-bottom);
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
    .animate-slideUp { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
    .safe-bottom { padding-bottom: max(1.5rem, env(safe-area-inset-bottom)); }
  </style>
<script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@18.3.1/",
    "react": "https://esm.sh/react@18.3.1",
    "react-dom/": "https://esm.sh/react-dom@18.3.1/",
    "react-dom": "https://esm.sh/react-dom@18.3.1",
    "@google/genai": "https://esm.sh/@google/genai@1.40.0",
    "recharts": "https://esm.sh/recharts@2.12.7"
  }
}
</script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./index.tsx"></script>
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
          .then(reg => console.log('SW Registered'))
          .catch(err => console.error('SW Failed', err));
      });
    }
  </script>
</body>
</html>
