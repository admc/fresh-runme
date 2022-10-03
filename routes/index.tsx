export default function Home() {
  return (
    <div class="bg-black text-white w-full min-h-screen">
      <div class="p-4 mx-auto max-w-screen-xl flex flex-col space-y-16 items-center justify-center">
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
      </div>
    </div>
  );
}
