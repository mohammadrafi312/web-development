let post ={
    username: "John Doe",
    email:"john.doe@example.com",
    tags: ["javascript", "web development", "programming"],
    content: "This is a sample post."
}
// Accessing properties of the post object
console.log(post.username); // Output: John Doe
console.log(post["email"]); // Output: john.doe@example.com
console.log(post["tags"]); // Output: ["javascript", "web development", "programming"]
console.log(post["content"]); // Output: "This is a sample post."