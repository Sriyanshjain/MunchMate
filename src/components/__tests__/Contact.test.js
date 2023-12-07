import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"
test("contactUs should load",()=>{
    render(<ContactUs/>)
    const heading= screen.getByRole("heading");
    expect(heading).toBeInTheDocument()
})


