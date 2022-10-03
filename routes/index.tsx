export default function Home() {
  return (
    <div class="bg-black text-white w-full min-h-screen">
      <div class="p-4 mx-auto max-w-screen-lg flex flex-col space-y-16 items-center justify-center">
        <div class="text-center text-7xl">runme 🛸</div>
        <div>
          <a href="">
            <div class="bg-green-500 rounded-sm font-medium px-4 py-1">Install the extension</div>
          </a>
        </div>
        <div>
          <img
            src="/demo.gif"
            class="min-w-max"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </div>
        <div class="flex flex-col text-center space-y-6">
          <div class="font-bold text-3xl">Integrations</div>
          <div class="flex flex-row flex-wrap space-x-4 text-2xl">
            <div>Fresh</div>
            <div>Vercel</div>
            <div>Begin</div>
          </div>
        </div>
      </div>
      <div class="text-center text-2xl py-8">•</div>

      <div class="text-center">
        <div>Check out the runme project on Github.</div>
        <div>Check out this website example on Github.</div>
      </div>
    </div>
  );
}
