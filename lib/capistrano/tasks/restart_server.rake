task :restart_server do
  on roles(:all) do |_host|
    within(fetch(:deploy_to)) do
      path_to_pid = capture('find . -name "server.pid" -type f')
      if path_to_pid == ''
        puts 'No server running'
        within('current') do
          execute('ruby bin/rails server webrick -e production -p 3010 -d')
        end
      else
        puts 'Found server running PID file'
        puts path_to_pid
      end
      # output = capture('ps aux | grep rails | grep 3010')
      # puts output
    end
  end
end

before :restart_server, 'rvm:hook'