import Admin from '@/components/adminReceitas';
import "@/components/admin/css/progressao.css"
async function pegarReceitas() {
  const res = await fetch("https://gym-academy-back-end-six.vercel.app/receitas", {
    
    cache: "no-store",
  });
  
  const info = await res.json();
  return info;
}
const admin = async () => {
  const receitas = await pegarReceitas();

  return (
    <div>
      
      <Admin Receitas={receitas}/>
    </div>
  );
};

export default admin;
