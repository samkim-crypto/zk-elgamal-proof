import init, { hello } from 'hello-wasm-universal/bundler';

async function main() {
    await init();

    const message = hello();
    document.getElementById('output').textContent = message;
}

main();
