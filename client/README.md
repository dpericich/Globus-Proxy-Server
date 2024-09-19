# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

SSH Key = ssh -o "IdentitiesOnly=yes" -i "ST-Globus-EC2.pem" ubuntu@ec2-54-212-30-163.us-west-2.compute.amazonaws.com

SSH push code command = rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -o "IdentitiesOnly=yes" -i /Users/scottlucas/Desktop/certs/ST-Globus-EC2.pem" \
. ubuntu@ec2-54-212-30-163.us-west-2.compute.amazonaws.com:~/app

RELOAD AND RESTART
sudo systemctl daemon-reload
sudo systemctl enable myapp.service
sudo systemctl start myapp.service
