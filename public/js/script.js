document.addEventListener("DOMContentLoaded", () => {
  // Function to handle user signup
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && password) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to sign up.");
      }
    }
  };

  // Function to handle user login
  const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in.");
      }
    }
  };

  // Function to handle user logout
  const logoutHandler = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log out.");
    }
  };

  // Function to handle creating a new post
  const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();

    if (title && content) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to create post.");
      }
    }
  };

  // Function to handle editing a post
  const editPostFormHandler = async (event) => {
    event.preventDefault();

    const post_id = event.target.getAttribute("data-id");
    const title = document.querySelector("#edit-post-title").value.trim();
    const content = document.querySelector("#edit-post-content").value.trim();

    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to edit post.");
      }
    }
  };

  // Function to handle deleting a post
  const deletePostHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");

      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to delete post.");
      }
    }
  };

  // Function to handle submitting a new comment
  const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector("#comment-text").value.trim();
    const post_id = event.target.getAttribute("data-id");

    if (comment_text) {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment_text, post_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to submit comment.");
      }
    }
  };

  // Event listeners
  document.querySelector("#signup-form")?.addEventListener("submit", signupFormHandler);
  document.querySelector("#login-form")?.addEventListener("submit", loginFormHandler);
  document.querySelector("#logout-btn")?.addEventListener("click", logoutHandler);
  document.querySelector("#new-post-form")?.addEventListener("submit", newPostFormHandler);
  document.querySelectorAll(".edit-post-btn").forEach((btn) =>
    btn.addEventListener("click", editPostFormHandler)
  );
  document.querySelectorAll(".delete-post-btn").forEach((btn) =>
    btn.addEventListener("click", deletePostHandler)
  );
  document.querySelectorAll("#comment-form").forEach((form) =>
    form.addEventListener("submit", commentFormHandler)
  );

  // Show/hide new post form
  document.querySelector("#new-post-btn")?.addEventListener("click", () => {
    document.querySelector("#new-post-form").classList.toggle("hidden");
  });
});
