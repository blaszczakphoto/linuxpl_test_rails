task :restart_server do
  on roles(:all) do |_host|
    within(fetch(:deploy_to)) do
      path_to_pid = capture('find . -name "server.pid" -type f')
      if path_to_pid == ''
        puts 'No server running'
        within('current') do
          puts capture(:pwd)
          puts capture(:ls, '-a')
          execute('source /home/mario199/.bashrc')
          puts capture('echo $RAILS_SERVE_STATIC_FILES')
          execute(:bundle, :exec, :ruby, 'bin/rails server webrick -e production -p 3010 -d')
        end
      else
        puts 'Found server running PID file'
        puts path_to_pid
        pid = capture("cat #{path_to_pid}")
        puts pid
        pid_exists = capture("ps aux | awk '{print $2}'")
        puts pid_exists
        execute(:kill, pid) if pid_exists.include?(pid)
        execute(:rm, "-rf #{path_to_pid}")
        execute('source /home/mario199/.bashrc')
        puts capture('echo $RAILS_SERVE_STATIC_FILES')
        within('current') do
          execute(:bundle, :exec, :ruby, 'bin/rails server webrick -e production -p 3010 -d')
        end
      end
    end
  end
end
