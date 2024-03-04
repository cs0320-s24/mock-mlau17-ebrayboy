import { Dispatch, SetStateAction } from 'react';

/**
 * This is one of the support branches of APP that handles the login button, which is how it 
 * checks if the user is logged in currently. This way unauthorized users won't be able to 
 * use our website.
 */

/**
 * This interface is stores the login status and sharing its state with other classes
 * 
 * @prop isLoggedIn allows the program to check if they are logged in
 * @prop setisLoggedIn allows the status to be updated when a change to the login button
 */
interface loginProps {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

/**
 * This is the main function that controls the login button and what is displayed to the user
 * 
 * @param props the login props that the function access and check and change the props
 * 
 * @return a button that allows the user to login and sign out
 */
export function LoginButton(props: loginProps) {

  const authenticate = () => {
    const newValue = !props.isLoggedIn
    props.setIsLoggedIn(newValue)
    return newValue
  }

  if (props.isLoggedIn) {
    return (
      <button aria-label='Sign Out' onClick={authenticate}>Sign out</button>
    )
  } else {
    return (
      <button aria-label='Login' onClick={authenticate}>Login</button>
    )
  }
}