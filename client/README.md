##### 7/25 update - Issues with AWS. I've redeployed backend to Render. Frontend still with hostinger. Render made it much easier than I remember.

- basic plan $7/mo

Methods below from "Sam Meech Ward" on youtube

SSH Key = ssh -o "IdentitiesOnly=yes" -i "ST-Globus-EC2.pem" ubuntu@ec2-54-212-30-163.us-west-2.compute.amazonaws.com

SSH push code command = rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -o "IdentitiesOnly=yes" -i /Users/scottlucas/Desktop/certs/ST-Globus-EC2.pem" \
. ubuntu@ec2-54-212-30-163.us-west-2.compute.amazonaws.com:~/app

RELOAD AND RESTART
sudo systemctl daemon-reload
sudo systemctl enable myapp.service
sudo systemctl start myapp.service

SSH Key = ssh -o "IdentitiesOnly=yes" -i "SafeTravels-Globus-cert.pem" ubuntu@ec2-35-94-36-241.us-west-2.compute.amazonaws.com

SSH push code command = rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -o "IdentitiesOnly=yes" -i /Users/scottlucas/Desktop/certs/SafeTravels-Globus-cert.pem" \
. ubuntu@ec2-35-94-36-241.us-west-2.compute.amazonaws.com:~/app
