// Service Worker بسيط جدًا — وظيفته الوحيدة تفعيل خاصية "تثبيت التطبيق" على أندرويد.
// لا يقوم بتخزين أي ملفات مؤقتًا، عمدًا، لتجنب أي مشاكل تحديث أو كاش قديم.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// وجود هذا المستمع (حتى لو فارغ) هو الشرط التقني الذي يطلبه أندرويد كروم
// لاعتبار الموقع "قابلًا للتثبيت" كتطبيق.
self.addEventListener('fetch', () => {});
