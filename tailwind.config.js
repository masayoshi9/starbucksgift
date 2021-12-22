module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      transitionTimingFunction: {
        datav1: "cubic-bezier(0.1, 0.8, 0.2, 1)",
      },
      animation: {
        feedinBottom: "feedinkey 2s 0.1s ease-in",
        topItemsPop1:
          "topItemsPop1key 1s 0.2s forwards cubic-bezier(0.1, 0.8, 0.2, 1)",
        topItemsPop3: "topItemsPop3key 1.1s 0.3s forwards",
        float1: "float1key 1.5s 2.2s infinite alternate ease-in-out",
        float2: "float2key 2.0s 1.7s infinite alternate ease-in-out",
        float3: "float3key 2.4s 1.2s infinite alternate ease-in-out",
        float4: "float4key 2.7s 1.1s infinite alternate ease-in-out",
      },
      keyframes: {
        feedinkey: {
          "0%": {
            opacity: "0",
            transform: "translate(0px, calc(20/750*100vw))",
          },
          "100%": { opacity: "1", transform: "translate(0px, 0px)" },
        },
        topItemsPop1key: {
          "0%": { transform: "translate(0px, calc(15/750*100vw))" },
          "40%": { transform: "translate(0px, calc(-15/750*100vw))" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        topItemsPop3key: {
          "0%": { transform: "translate(0px, calc(30/750*100vw))" },
          "40%": { transform: "translate(0px, calc(-30/750*100vw))" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        float1key: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, calc(-12/750*100vw))" },
        },
        float2key: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, calc(10/750*100vw))" },
        },
        float3key: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, calc(-8/750*100vw))" },
        },
        float4key: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, calc(6/750*100vw))" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
