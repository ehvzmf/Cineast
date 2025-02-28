// 페이지를 구성하는 독립적인 UI 블록
// 헤더 (로고, 프로필 메뉴 등)
// Vanilla CSS 작성 후 디렉터리화 or Tailwind 추가하기 

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = true;

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <p>Kinotic</p>
        </Link>
      </div>
      <div className={styles.profileWrapper}>
        {isAuthenticated ? (
          <div>
            <button
              className={styles.profilePosition}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
            
            {isMenuOpen && (
              <div>
                <Link to="/profile">
                  마이페이지
                </Link>
                <button>
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            로그인
          </Link>
        )}
      </div>
    </div>
  );
}

/**
 * [ ] 실제 유저 정보 연동: isAuthenticated를 useAuth() 같은 훅으로 관리
 * [ ] 더 정교한 스타일링: 다크 모드 지원, 애니메이션 추가
 * [ ]프로필 이미지 연동: user.profileImage를 가져와서 표시
 */