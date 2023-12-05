import { Instagram } from '@/image/nav';
import React from 'react'
import ColorButton from '../ui/ColorButton';
import { signIn } from 'next-auth/react';

export default function UnauthenticatedHomeNav() {
  return (
    <div className=" flex justify-center border-b">
          <div className=" w-screen lap:max-w-1152px flex justify-between h-14 items-center px-5">
            <div className=" flex h-full w-40 text-3xl items-center">
              <Instagram />
            </div>
            <div className=" flex">
              <ColorButton
                buttonColor="blue"
                onClick={() => {
                  signIn();
                }}
                text="로그인"
              />
              <ColorButton
                buttonColor="white"
                onClick={() => null}
                text="가입하기"
              />
            </div>
          </div>
        </div>  )
}
