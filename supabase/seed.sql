-- ============================================
-- Seed Data: 관리자 프로필 role 설정
-- 실행 시 기존 admin 이메일의 role을 'admin'으로 업데이트
-- ============================================

-- 관리자 이메일 목록에 해당하는 프로필을 admin으로 설정
UPDATE public.profiles
SET role = 'admin'
WHERE email IN (
  'aebonlee@gmail.com',
  'aebon@kakao.com',
  'admin@dreamitbiz.com'
);
