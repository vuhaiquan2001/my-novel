import React from "react";

function TestComponents() {
  const user = {
    id: 6291039255,
    username: "minhquandg01",
    ref_code: "37af8342c262",
    age: 2,
    is_premium: false,
    top_percent: 100,
    created_at: 1721701912,
    score: 2379,
    rank: 7,
    channel_joined: true,
    checkin_streak: 1,
    last_check_in: 1721723941,
  };
  const isCheck = (dayIndex: number) => {
    const checkinStreak = user.checkin_streak;
    const lastCheckIn = user.last_check_in * 1000; // Convert to milliseconds
    const lastCheckInDate = new Date(lastCheckIn);

    // Ngày hôm nay
    const today = new Date();
    // Set to midnight for date comparison
    today.setHours(0, 0, 0, 0);

    // Ngày bắt đầu tính streak
    const streakStartDate = new Date(lastCheckIn);
    streakStartDate.setDate(streakStartDate.getDate() - (checkinStreak - 1));
    // Set to midnight for date comparison
    streakStartDate.setHours(0, 0, 0, 0);

    // Ngày hiện tại tương ứng với index
    const checkDate = new Date(today);
    checkDate.setDate(checkDate.getDate() - dayIndex);

    // Ngày hiện tại lớn hơn/= ngày bắt đầu tính streak và phải nhỏ hơn/bằng lần check gần nhất(ngày hôm nay)
    return {
      isCheck: checkDate >= streakStartDate && checkDate <= lastCheckInDate,
      canCheck: checkDate > lastCheckInDate,
    };
  };

  return (
    <div>
      {Array(7)
        .fill(null)
        .map((v, index) => {
          console.log(index, isCheck(index));
          return (
            <div className={`${isCheck(index).isCheck ? "text-red-500" : ""}`}>
              {index + 1}
            </div>
          );
        })}
    </div>
  );
}

export default TestComponents;
