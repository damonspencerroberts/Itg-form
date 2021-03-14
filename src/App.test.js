// import React from 'react'
// import Form from "./components/form/form";
// import { render, fireEvent } from '@testing-library/react'
// import { act } from 'react-dom/test-utils'


// describe("With valid inputs", () => {
//   it("renders the email validation error", async () => {
//     const {getByPlaceholderText, container} = render(<Form />)

//     const nameInput = getByPlaceholderText("philliprobinson@gmail.com")

//     await act(async () => {
//       fireEvent.change(nameInput, {target: {value: 'damon@test.com'}})
//       fireEvent.blur(nameInput)
//     });

//     console.log(nameInput)
//     expect(container.innerHTML).toMatch(/form-icon-green/)
//   })
// })