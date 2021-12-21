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
          "0%": { opacity: "0", transform: "translate(0px, 20px)" },
          "100%": { opacity: "1", transform: "translate(0px, 0px)" },
        },
        topItemsPop1key: {
          "0%": { transform: "translate(0px, 15px)" },
          "40%": { transform: "translate(0px, -15px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        topItemsPop3key: {
          "0%": { transform: "translate(0px, 30px)" },
          "40%": { transform: "translate(0px, -30px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        float1key: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, -12px)" },
        },
        float2key: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, 10px)" },
        },
        float3key: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, -8px)" },
        },
        float4key: {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, 6px)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
