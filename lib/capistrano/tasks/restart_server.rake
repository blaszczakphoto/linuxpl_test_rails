desc 'Restart server'
namespace :deploy do
  task :restart_server do
    on roles(:all) do |_host|
      within(fetch(:deploy_to)) do
        path_to_pid = capture('find . -name "server.pid" -type f')
        if path_to_pid == ''
          puts 'No server running'
          puts capture(:rvm, :gemset, :list)
          puts capture(:rvm, :gemdir)
          execute("source /home/mario199/.bashrc")
          execute(:rvm, :gemset, :use, :app1)
          puts capture(:rvm, :gemdir)
          # execute(:ruby, 'bin/rails server webrick -e production -p 3010 -d')
        else
          puts 'Found server running PID file'
        end
        # output = capture('ps aux | grep rails | grep 3010')
        # puts output
      end
    end
  end
end

# Capistrano 3
task :query_interactive do
  on roles(:all) do
    info capture("[[ $- == *i* ]] && echo 'Interactive' || echo 'Not interactive'")
  end
end
task :query_login do
  on roles(:all) do
    info capture("shopt -q login_shell && echo 'Login shell' || echo 'Not login shell'")
  end
end
