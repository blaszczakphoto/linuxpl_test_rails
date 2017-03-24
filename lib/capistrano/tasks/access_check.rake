desc "Check that we can access everything"
task :check_write_permissions do
  on roles(:all) do |host|
    if test("[ -w #{fetch(:deploy_to)} ]")
      info "#{fetch(:deploy_to)} is writable on #{host}"
      within(fetch(:deploy_to)) do
        ls_output = capture(:pwd)
        info ls_output
      end
    else
      error "#{fetch(:deploy_to)} is not writable on #{host}"
    end
  end
end