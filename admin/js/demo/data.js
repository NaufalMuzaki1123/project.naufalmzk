let posts = [];
        let comments = [];
        let visitors = 0;

        function updateStats() {
            document.getElementById('postCount').innerText = posts.length;
            document.getElementById('commentCount').innerText = comments.length;
            document.getElementById('visitorCount').innerText = visitors;
        }

        document.getElementById('postForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            const newPost = {
                id: posts.length + 1,
                title: title,
                content: content,
                comments: []
            };

            posts.push(newPost);
            displayPosts();
            
            // Reset form
            document.getElementById('postForm').reset();
            updateStats();
        });

        function displayPosts() {
            const postList = document.getElementById('postList');
            postList.innerHTML = ''; // Clear the current list

            posts.forEach(post => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${post.title}</td>
                    <td>${post.content}</td>
                    <td><button onclick="editPost(${post.id})">Edit</button></td>
                `;
                postList.appendChild(row);
            });
        }

        function editPost(postId) {
            const post = posts.find(p => p.id === postId);
            if (post) {
                document.getElementById('title').value = post.title;
                document.getElementById('content').value = post.content;

                // Remove the post from array (to be replaced after edit)
                posts = posts.filter(p => p.id !== postId);
                displayPosts(); // Update the table after removing
                updateStats();
            }
        }

        // Simulate adding visitors
        setInterval(() => {
            visitors++;
            updateStats();
        }, 5000); // Set visitor count increase every 5 seconds

        updateStats(); // Initialize stats display
