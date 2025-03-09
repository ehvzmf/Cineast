import { useState, useEffect, createContext, useContext } from "react";

// 인증 상태 타입 정의
interface AuthContextType {
  user: string | null;
  login: (token: string, username: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// 기본값을 갖는 Context 생성
const AuthContext = createContext<AuthContextType | null>(null);

// 인증 훅
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 내부에서 사용해야 합니다.");
  }
  return context;
};

// 인증 Provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  // 초기 인증 상태 확인 (로컬 스토리지에서 토큰 가져오기)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // 로그인 처리
  const login = (token: string, username: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", username);
    setUser(username);
  };

  // 로그아웃 처리
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
