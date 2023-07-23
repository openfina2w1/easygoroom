import React from 'react'

export default function TeamCard(props) {
    const {image,name,desg}=props;
  return (
    <div class="">
    <div class="mx-auto mb-10 w-full max-w-[370px]">
      <div class="relative overflow-hidden rounded-lg shadow-2xl border-cyan-800">
        <img
          src={image}
          alt="image"
          class="w-full"
        />
        <div class="absolute bottom-5 left-0 w-full text-center">
          <div
            class="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3"
          >
            <h3 class="text-base font-semibold text-dark">
              {name}
            </h3>
            <p class="text-sm text-body-color">{desg}</p>
            <div>
              <span class="absolute left-0 bottom-0">
                <svg
                  width="61"
                  height="30"
                  viewBox="0 0 61 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="45"
                    r="45"
                    fill="#13C296"
                    fill-opacity="0.11"
                  />
                </svg>
              </span>
              <span class="absolute top-0 right-0">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="0.706257"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 0.706257 24.3533)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 6.39669 24.3533)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 12.0881 24.3533)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 17.7785 24.3533)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="0.706257"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 0.706257 18.6624)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 6.39669 18.6624)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 12.0881 18.6624)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 17.7785 18.6624)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="0.706257"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 0.706257 12.9717)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 6.39669 12.9717)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 12.0881 12.9717)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 17.7785 12.9717)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="0.706257"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 0.706257 7.28077)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 6.39669 7.28077)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 12.0881 7.28077)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 17.7785 7.28077)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="0.706257"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 0.706257 1.58989)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 6.39669 1.58989)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 12.0881 1.58989)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 17.7785 1.58989)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
