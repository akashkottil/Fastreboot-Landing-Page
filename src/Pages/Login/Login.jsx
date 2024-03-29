import React from 'react';
import { useForm } from 'react-hook-form';

import meditaion from '../../assets/Img/meditation.jpg'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <>
    <section>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
      <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
        <div class="w-full px-6 py-3">
          <div>
            <div class="mt-3 text-left sm:mt-5">
              <div class="inline-flex items-center w-full">
                <h3 class="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">Sign up</h3>
              </div>
              <div class="mt-4 text-base text-gray-500">
                <p>Sign up and get our newest news.</p>
              </div>
            </div>
          </div>

          <div class="mt-6 space-y-2">
            <div>
              <label for="email" class="sr-only">Email</label>
              <input type="text" name="email" id="email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email" fdprocessedid="rpnxcp"/>
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input type="text" name="password" id="password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password" fdprocessedid="1iaai"/>
            </div>
            <div class="flex flex-col mt-4 lg:space-y-2">
              <button type="button" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" fdprocessedid="wm35s9">Sign up</button>
              <a href="#" type="button" class="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"> Forgot your Password? </a>
            </div>
          </div>
        </div>
        <div class="order-first hidden w-full md:block">
          <img class="object-cover h-full bg-cover rounded-l-lg" src={meditaion} alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
};

export default Login;
