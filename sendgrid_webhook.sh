function localtunnel {
lt -s jlambson1987 --port 5000
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
