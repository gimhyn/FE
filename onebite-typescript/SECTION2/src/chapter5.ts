// enum타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입(ts only)
enum Role {
  ADMIN,
  USER=15,
  GUEST,
};

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN //0: 관리자
}

const user2 = {
  name: "홍길동",
  role: Role.USER,
  language: Language.korean
}

const user3 = {
  name: "아무개",
  role: Role.GUEST,
  language: Language.english,
}


console.log(user1, user2, user3);