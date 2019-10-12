# Reverse SSH, SSH To any PC in the world without asking for permission. SSH to any local IP, Remote SSH to a local and ...
With this package you DONT need any kind of VPN, public IP, Static IP or ... to ssh to a pc.  
It is an **easy to use** program. BUT It is a complex system from the inside.
You need to follow installation step by step.  
You will install this program on local PC, one time.  
After installtion, setting up and running, you will find the ssh address to that pc in the telegram channel you defined.

## Table of content
+ [Requirements](#requirements)
+ [Installation](#installation)
+ [License](#license)
+ [Donate](#donate)

## Requirements
+ OpenSSH
+ Nodejs
+ urxvt
+ tmate
+ Telgram
+ Linux!

## Installation
~~~bash
git clone https://github.com/mlibre/ssh_remote_to_local.git
cd ssh_remote_to_local
npm install
ssh-keygen # In Terminal
cp tmux.conf ~/.tmux.conf
sudo nano /etc/sudoers # Add yourself to sudoers
mlibre ALL = NOPASSWD: /usr/bin/killall, /usr/bin/kill, /bin/kill # Change mlibre to your username
~~~
* Set your Telegram Token and Chat_id and other stuff in index.js

* Putting program in startup Via pm2
	~~~bash
	# If you know pm2 startup. better use it. so good
	pm2 start ssh.js
	pm2 save
	~~~

* Putting program in startup Via OS:
	~~~bash
	nano tmate.desktop # Change the username
	cp tmate.desktop ~/.config/autostart/
	nano ssh_remote_to_local.desktop # Set the path
	cp ssh_remote_to_local.desktop ~/.config/autostart/
	~~~
## License
Free!

## Donate
My Bitcoin Address:
> 3JfNjydkEgKGjsnrU1SoCCAv1q2yTuCoDY