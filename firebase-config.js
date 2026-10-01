// ★ Firebase 專案設定資訊
export const firebaseConfig = {
  apiKey: "AIzaSyBM-oiCsFrQ0Nq8gAa7w2i4ptiW0asoEF0",
  authDomain: "redrain-bbe51.firebaseapp.com",
  projectId: "redrain-bbe51",
  storageBucket: "redrain-bbe51.firebasestorage.app",
  messagingSenderId: "375864945626",
  appId: "1:375864945626:web:ec3e090b34317e66d86ee3"
};

// 門市代碼設定：S01 ~ S18
export const STORES = Array.from({length: 18}, (_, i) => 'S' + String(i + 1).padStart(2, '0'));
