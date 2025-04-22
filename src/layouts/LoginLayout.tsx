import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function LoginLayout() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] to-[#D6BCFA]">
      <Card className="w-full max-w-sm bg-white/80 backdrop-blur-xl border border-[#b8a7e8] shadow-2xl animate-fade-in">
        <CardHeader className="gap-2">
          <CardTitle className="text-2xl font-bold text-[#6E59A5] text-center w-full mb-2">Inicia sesión</CardTitle>
          <p className="text-xs text-gray-500 font-medium text-center w-full mb-1">Gestión de Gastos Personales</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email" className="text-sm text-[#6E59A5]">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="ejemplo@email.com" className="mt-1 border-[#b8a7e8] focus:border-[#8B5CF6] focus:ring-[#8B5CF6] bg-white/70" autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm text-[#6E59A5]">Contraseña</Label>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="Contraseña" className="mt-1 border-[#b8a7e8] focus:border-[#8B5CF6] focus:ring-[#8B5CF6] bg-white/70 pr-10" autoComplete="current-password" />
              <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-2 top-2 p-1 text-[#8B5CF6]/70 hover:text-[#8B5CF6] transition" tabIndex={-1} aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>
                {showPassword ? (<EyeOff size={20} />) : (<Eye size={20} />)}
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-xs text-[#7E69AB] hover:underline hover:text-[#8B5CF6] transition">¿Olvidaste tu contraseña?</a>
          </div>
          <Button className="w-full bg-[#8B5CF6] text-white hover:bg-[#7E69AB] font-semibold text-base shadow-md transition">Ingresar</Button>
        </CardContent>
        <CardFooter className="flex justify-center text-xs text-gray-400 select-none">© {new Date().getFullYear()} Tu App de Gastos Personales</CardFooter>
      </Card>
    </div>
  );
}

export default LoginLayout;
