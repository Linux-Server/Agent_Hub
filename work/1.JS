const { Ollama } = require("langchain/ollama");

async function streamResponse() {
    // Initialize the Ollama LLM with the desired configuration
    const model = new Ollama({
        model: "llama3.2",
        baseUrl: "http://65.2.146.205:11434",
        streaming: true, // Enable streaming
    });

    // Query the model and handle the streaming response
    const responseStream = await model.call("Python");

    // Process the streamed response
    for await (const chunk of responseStream) {
        process.stdout.write(chunk);
    }
}

// Execute the function
streamResponse().catch(console.error);