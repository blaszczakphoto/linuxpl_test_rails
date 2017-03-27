namespace :deploy do
  task :stop_server do
    on roles(:all) do |_host|
      within(fetch(:deploy_to)) do
        path_to_pid = capture('find . -name "server.pid" -type f')
        if path_to_pid == ''
          puts 'No server running'
        else
          puts 'Found server running PID file'
          pid = capture("cat #{path_to_pid}")
          pids_list = capture("ps aux | awk '{print $2}'")
          execute(:kill, pid) if pids_list.include?(pid)
          execute(:rm, "-rf #{path_to_pid}")
        end
      end
    end
  end

  task :start_server do
    on roles(:all) do |_host|
      within(fetch(:deploy_to)) do
        within('current') do
          execute(:bundle, :exec, :ruby, "bin/rails server webrick -e production -p #{fetch(:web_server_port)} -d")
        end
      end
    end
  end

  
  task :restart_server do
    invoke "deploy:stop_server"
    invoke "deploy:start_server"
  end
end

