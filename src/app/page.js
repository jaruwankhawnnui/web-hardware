
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center ">
      <h1 className="text-3xl my-3">Welcome!</h1>
      <LoginForm />
    </div>
  );
}
