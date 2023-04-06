import { execSync } from 'child_process';
import { showSuccess } from '../../utils/logger.util';

export function awsCdkTemplate() {

    execSync('git clone --depth=1 --branch=main https://github.com/nsw-health-pathology/goldpath-aws-cdk-typescript.git temp-golden-path');
    execSync('sleep 1s');
    execSync('rm -rf ./temp-golden-path/.git');
    execSync('sleep 1s');
    execSync('cp -r ./temp-golden-path/. .');
    execSync('sleep 1s');
    execSync('rm -rf ./temp-golden-path');
    showSuccess('NSWHP DevOps has laid an aws-cdk golden path for you!');
    return;
}