# Reverse SSH, SSH To any PC in the world without asking for permission. SSH to any local IP, Remote SSH to a local, and ...
With this package, you dont need any kind of VPN, public IP, Static IP, or ... to ssh to a pc.  
It is an **easy-to-use** program.  
Follow installation step by step.  
Install the program on the local PC you want to SSH.  
After installation, and running, you will find the ssh address to that pc in the telegram channel you defined.

## Table of content
+ [Requirements](#requirements)
+ [Installation](#installation)
+ [License](#license)

## Requirements
+ OpenSSH
+ Nodejs
+ urxvt
+ tmate
+ Telgram
+ Linux

## Installation
~~~bash
# Create a Private Telegram group
# Create a Telegram Bot
# Add the bot to the group
# In local PC (the pc you want to SSH to it):
git clone https://github.com/mlibre/SSH_To_Any.git
cd SSH_To_Any/
npm install
mv sec.json.bak sec.json
# Find and put group-id and bot-token in the sec.json
# Set the "every" variable in ssh.js. 1 is every one minute
ssh-keygen # In Terminal
cp tmux.conf ~/.tmux.conf
sudo nano /etc/sudoers # Add yourself to the sudoers
mlibre ALL = NOPASSWD: /usr/bin/killall, /usr/bin/kill, /bin/kill # Change mlibre to your username
~~~

* Putting the program in startup via pm2
	~~~bash
	# If you know pm2 startup. better use it. so good
	pm2 startup
	pm2 start ssh.js --name ssh_anywhere
	pm2 save
	~~~

* Putting the program in startup via OS:
	~~~bash
	nano tmate.desktop # Change the username
	cp tmate.desktop ~/.config/autostart/
	nano ssh_remote_to_local.desktop # Set the path
	cp ssh_remote_to_local.desktop ~/.config/autostart/
	~~~

The ssh address will come to the channel you created :)

## License
Free

Donate or .... :heartpulse:
=======
ETH:
> 0xc9b64496986E7b6D4A68fDF69eF132A35e91838e