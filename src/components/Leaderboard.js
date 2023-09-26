import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Container from "./Container";
import Nav from "./Nav";
import { receiveUsers } from "../actions/users";
function Leaderboard() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  // dispatch(receiveUsers(users));
  let userArr = Object.values(users);
  return (
    <div>
      <Container>
        <div class="relative flex flex-col m-12 items-center overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Users
                </th>
                <th scope="col" class="px-6 py-3">
                  Answered
                </th>
                <th scope="col" class="px-6 py-3">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {userArr &&
                userArr.map((u) => {
                  return (
                    <tr
                      key={u.id}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {u.name}
                      </th>
                      <td class="px-6 py-4">
                        {u.answers ? Object.keys(u.answers).length : 0}
                      </td>
                      <td class="px-6 py-4">
                        {u.questions ? u.questions.length : 0}
                      </td>
                    </tr>
                  );
                })} */}
              {userArr.map((u) => {
                if (u.name && u.answers && u.questions) {
                  return (
                    <tr
                      key={u.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {u.name}
                      </th>
                      <td className="px-6 py-4">
                        {u.answers ? Object.keys(u.answers).length : 0}
                      </td>
                      <td className="px-6 py-4">
                        {u.questions ? u.questions.length : 0}
                      </td>
                    </tr>
                  );
                } else {
                  return null; // Skip rendering incomplete entries
                }
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

export default Leaderboard;
