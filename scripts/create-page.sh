curl --include --request POST http://localhost:3000/pages \
  --header "Authorization: Token token=Q7oxF+/M2PyDzKgVeDXHQbjhFllLPYBPsajp1nimk1E=--bMcUQlyBo3lxm2zQVkpQGjhVXjRvdxa4ihUBuals90Y=" \
  --header "Content-Type: application/json" \
  --data '{
    "page": {
      "header": "New Page I REALLY Dont want to see",
      "content": "New Page I Dont want to see",
      "sidebar": "the bar is on the other side",
      "footer": "New Page I Dont want to see",
      "_owner": "req.currentUser._id"
    }
  }'
